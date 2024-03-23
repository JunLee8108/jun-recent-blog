import { Suspense, lazy } from "react";

import ScrollToTop from "./components/common/ScrollToTop";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import BlogDetail from "./pages/BlogDetail/BlogDetail";

import Loading from "./components/common/Loading";
// import Empty from "./components/common/Empty";

import { Routes, Route } from "react-router-dom";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import React, { useEffect } from "react";
import ReactGA4 from "react-ga4";

ReactGA4.initialize("G-7QEZP8TRFH"); // 'G-XXXXXXXXXX'를 실제 GA4 추적 ID로 변경하세요.

const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
// const BlogDetail = lazy(() => import("./pages/BlogDetail/BlogDetail"));
const ContactMe = lazy(() => import("./pages/ContactMe/ContactMe"));
const Page404 = lazy(() => import("./components/common/Page404"));

function App() {
  useEffect(() => {
    // 페이지가 변경될 때마다 페이지 뷰를 기록
    ReactGA4.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []); // 의존성 배열을 비워서 컴포넌트가 마운트될 때만 실행되도록 합니다.
  return (
    <div className="App">
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="refresh" element={<Empty />} /> */}

        <Route
          exact
          path="/blog"
          element={
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          }
        />

        <Route
          path="/blog/:id"
          element={
            <Suspense fallback={<Loading />}>
              <BlogDetail />
            </Suspense>
          }
        />

        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<Loading />}>
              <Portfolio />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <ContactMe />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Page404 />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
library.add(fab, fas, far);

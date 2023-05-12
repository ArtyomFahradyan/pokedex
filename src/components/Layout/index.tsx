import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "components/Spinner";
import { Wrapper } from "./styles";

const Home = lazy(() => import("pages/Home"));

function Layout() {
  return (
    <Wrapper>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Wrapper>
  );
}

export default Layout;

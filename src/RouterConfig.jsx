/** @format */

import { Routes, Route } from "react-router-dom";
import PublicRoute from "./components/Authorization/PublicRoute.jsx";
import WEB_PAGES from "./pages";
import PATH from "./utils/path";

function RouterConfig() {
  return (
    <Routes>
      <Route
        path={PATH.POKEMON_LIST}
        element={<PublicRoute element={<WEB_PAGES.POKEMON_LIST />} />}
      />
      <Route
        path={PATH.POKEMON_DETAIL}
        element={<PublicRoute element={<WEB_PAGES.POKEMON_DETAIL />} />}
      />
      <Route
        path={PATH.USER_DETAIL}
        element={<PublicRoute element={<WEB_PAGES.USER_DETAIL />} />}
      />
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NO_PAGE_FOUND />} />
    </Routes>
  );
}

export default RouterConfig;

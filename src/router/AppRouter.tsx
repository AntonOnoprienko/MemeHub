import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ListPage from "../pages/ListPage";
import TablePage from "../pages/TablePage";
import ItemPage from "../pages/ItemPage";

const AppRouter = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="*" element={<ListPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/list/item/:id" element={<ItemPage />} />
        </Route>
    </Routes>
);

export default AppRouter;

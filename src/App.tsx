import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ScrollToHash } from '@/components/ScrollToHash';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { HomePage } from '@/pages/HomePage';
import { CategoryPage } from '@/pages/CategoryPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { DashboardPage2 } from '@/pages/DashboardPage2';
import { ProfilesPage, MetodologiaPage } from '@/pages/ProfilesPage';
import { FaleConoscoPage } from '@/pages/FaleConoscoPage';

function PortalLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}

export function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/painel" element={<DashboardPage />} />
        <Route path="/painel2" element={<DashboardPage2 />} />
        <Route path="/perfis" element={<ProfilesPage />} />
        <Route path="/perfis/metodologia" element={<MetodologiaPage />} />
        <Route element={<PortalLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/fale-conosco" element={<FaleConoscoPage />} />
          <Route path="/categoria/:id" element={<CategoryPage />} />
          {/* layouts específicos — IDs fixos, sem :id no path */}
          <Route path="/servico/boletim-acidente-transito" element={<ServiceDetailPage />} />
          {/* layout padrão com useParams — captura certidão e demais */}
          <Route path="*" element={<Navigate to="/#categorias" replace />} />
        </Route>
      </Routes>
    </>
  );
}

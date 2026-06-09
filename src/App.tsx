import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { HomePage } from '@/pages/HomePage';
import { CategoryPage } from '@/pages/CategoryPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { DashboardPage2 } from '@/pages/DashboardPage2';
import { ProfilesPage, MetodologiaPage } from '@/pages/ProfilesPage';

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
    <Routes>
      <Route path="/painel" element={<DashboardPage />} />
      <Route path="/painel2" element={<DashboardPage2 />} />
      <Route path="/perfis" element={<ProfilesPage />} />
      <Route path="/perfis/metodologia" element={<MetodologiaPage />} />
      <Route element={<PortalLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoria/:id" element={<CategoryPage />} />
        <Route path="/servico/:id" element={<ServiceDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

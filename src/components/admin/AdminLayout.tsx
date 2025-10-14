import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Building2, Users, LayoutDashboard, LogOut, Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Properties', href: '/admin/properties', icon: Building2 },
    { name: 'Leads', href: '/admin/leads', icon: Users },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Lamasat Admin</h1>
                  <p className="text-xs text-slate-500 mt-1">Real Estate Management</p>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive(item.href)
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-slate-200 space-y-2">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Back to Website</span>
              </button>
              <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className="flex-1 lg:ml-64">
          <div className="sticky top-0 z-30 bg-white border-b border-slate-200 lg:hidden">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-semibold text-slate-900">Lamasat Admin</h2>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-slate-500 hover:text-slate-900"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

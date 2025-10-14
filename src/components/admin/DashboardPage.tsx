import { Building2, Users, TrendingUp, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Properties',
      value: '24',
      change: '+2 this month',
      icon: Building2,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      title: 'Total Leads',
      value: '156',
      change: '+12 this week',
      icon: Users,
      color: 'text-green-600 bg-green-100',
    },
    {
      title: 'Conversion Rate',
      value: '24%',
      change: '+3% from last month',
      icon: TrendingUp,
      color: 'text-orange-600 bg-orange-100',
    },
    {
      title: 'Unread Messages',
      value: '8',
      change: '2 urgent',
      icon: Mail,
      color: 'text-red-600 bg-red-100',
    },
  ];

  const recentLeads = [
    { id: 1, name: 'Ahmed Al-Rashid', property: 'Haven', date: '2025-10-14', status: 'new' },
    { id: 2, name: 'Fatima Hassan', property: 'Opal', date: '2025-10-13', status: 'contacted' },
    { id: 3, name: 'Mohammed Ali', property: 'Palace Villa', date: '2025-10-13', status: 'new' },
    { id: 4, name: 'Sarah Abdullah', property: 'Tulip Plus', date: '2025-10-12', status: 'qualified' },
    { id: 5, name: 'Omar Khalid', property: 'A72', date: '2025-10-12', status: 'contacted' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-2">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-medium text-slate-900">{lead.name}</p>
                    <p className="text-sm text-slate-600">{lead.property}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">{lead.date}</p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                        lead.status === 'new'
                          ? 'bg-blue-100 text-blue-800'
                          : lead.status === 'contacted'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Property Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Haven', leads: 28, percentage: 85 },
                { name: 'Opal', leads: 22, percentage: 70 },
                { name: 'Palace Villa', leads: 18, percentage: 60 },
                { name: 'Tulip Plus', leads: 15, percentage: 50 },
                { name: 'A72', leads: 12, percentage: 40 },
              ].map((property) => (
                <div key={property.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-900">{property.name}</span>
                    <span className="text-sm text-slate-600">{property.leads} leads</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-slate-900 h-2 rounded-full transition-all"
                      style={{ width: `${property.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Building2, Users, TrendingUp, Mail, ArrowUp, ArrowDown, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Properties',
      value: '24',
      change: '+2',
      changeType: 'increase',
      period: 'from last month',
      icon: Building2,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      title: 'Total Leads',
      value: '156',
      change: '+12',
      changeType: 'increase',
      period: 'from last week',
      icon: Users,
      color: 'text-green-600 bg-green-100',
    },
    {
      title: 'Conversion Rate',
      value: '24%',
      change: '+3%',
      changeType: 'increase',
      period: 'from last month',
      icon: TrendingUp,
      color: 'text-orange-600 bg-orange-100',
    },
    {
      title: 'Pending Actions',
      value: '8',
      change: '-2',
      changeType: 'decrease',
      period: 'from yesterday',
      icon: Mail,
      color: 'text-red-600 bg-red-100',
    },
  ];

  const recentLeads = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      property: 'Haven',
      date: '2025-10-14',
      time: '14:30',
      status: 'new',
      priority: 'high',
    },
    {
      id: 2,
      name: 'Fatima Hassan',
      property: 'Opal',
      date: '2025-10-13',
      time: '10:15',
      status: 'contacted',
      priority: 'medium',
    },
    {
      id: 3,
      name: 'Mohammed Ali',
      property: 'Palace Villa',
      date: '2025-10-13',
      time: '16:45',
      status: 'new',
      priority: 'high',
    },
    {
      id: 4,
      name: 'Sarah Abdullah',
      property: 'Tulip Plus',
      date: '2025-10-12',
      time: '11:20',
      status: 'qualified',
      priority: 'high',
    },
    {
      id: 5,
      name: 'Omar Khalid',
      property: 'A72',
      date: '2025-10-12',
      time: '09:30',
      status: 'contacted',
      priority: 'medium',
    },
  ];

  const topProperties = [
    { name: 'Haven', leads: 28, views: 1240, conversion: 18 },
    { name: 'Opal', leads: 22, views: 980, conversion: 15 },
    { name: 'Palace Villa', leads: 18, views: 850, conversion: 12 },
    { name: 'Tulip Plus', leads: 15, views: 720, conversion: 10 },
    { name: 'A72', leads: 12, views: 650, conversion: 8 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="default">New</Badge>;
      case 'contacted':
        return <Badge variant="warning">Contacted</Badge>;
      case 'qualified':
        return <Badge variant="success">Qualified</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPriorityIndicator = (priority: string) => {
    const colors = {
      high: 'bg-red-500',
      medium: 'bg-yellow-500',
      low: 'bg-green-500',
    };
    return <div className={`w-2 h-2 rounded-full ${colors[priority as keyof typeof colors]}`} />;
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-2">Overview of your real estate business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const ChangeIcon = stat.changeType === 'increase' ? ArrowUp : ArrowDown;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <div
                        className={`flex items-center gap-1 text-xs font-medium ${
                          stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        <ChangeIcon className="w-3 h-3" />
                        {stat.change}
                      </div>
                      <span className="text-xs text-slate-500">{stat.period}</span>
                    </div>
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
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 flex-1">
                    {getPriorityIndicator(lead.priority)}
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{lead.name}</p>
                      <p className="text-sm text-slate-600">{lead.property}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm text-slate-600">{lead.date}</p>
                      <p className="text-xs text-slate-500">{lead.time}</p>
                    </div>
                    {getStatusBadge(lead.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Top Properties</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProperties.map((property, index) => (
                <div key={property.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-slate-500">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium text-slate-900">{property.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {property.leads}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {property.views}
                      </div>
                      <Badge variant="success" className="text-xs">
                        {property.conversion}%
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-slate-900 h-2 rounded-full transition-all"
                      style={{ width: `${property.conversion * 5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: 'Website', count: 64, percentage: 41, color: 'bg-blue-500' },
                { source: 'Phone Call', count: 38, percentage: 24, color: 'bg-green-500' },
                { source: 'Email', count: 28, percentage: 18, color: 'bg-orange-500' },
                { source: 'Social Media', count: 16, percentage: 10, color: 'bg-pink-500' },
                { source: 'Referral', count: 10, percentage: 7, color: 'bg-slate-500' },
              ].map((item) => (
                <div key={item.source} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-900">{item.source}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">{item.count} leads</span>
                      <span className="text-sm font-medium text-slate-900">{item.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full transition-all`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-start gap-3" variant="outline">
                <Building2 className="w-4 h-4" />
                Add New Property
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <Users className="w-4 h-4" />
                View All Leads
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <Mail className="w-4 h-4" />
                Send Email Campaign
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <TrendingUp className="w-4 h-4" />
                Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

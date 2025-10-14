import { useState } from 'react';
import { Search, Filter, Mail, Phone, Calendar, Download, Eye } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/Table';
import { Badge } from '../ui/Badge';
import { Input } from '../ui/Input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';

const mockLeads = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    email: 'ahmed.rashid@email.com',
    phone: '+966 50 123 4567',
    property: 'Haven',
    status: 'new',
    date: '2025-10-14',
    message: 'Interested in 3-bedroom unit',
  },
  {
    id: 2,
    name: 'Fatima Hassan',
    email: 'fatima.h@email.com',
    phone: '+966 55 234 5678',
    property: 'Opal',
    status: 'contacted',
    date: '2025-10-13',
    message: 'Looking for luxury apartment',
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    email: 'm.ali@email.com',
    phone: '+966 50 345 6789',
    property: 'Palace Villa',
    status: 'new',
    date: '2025-10-13',
    message: 'Want to schedule viewing',
  },
  {
    id: 4,
    name: 'Sarah Abdullah',
    email: 'sarah.a@email.com',
    phone: '+966 55 456 7890',
    property: 'Tulip Plus',
    status: 'qualified',
    date: '2025-10-12',
    message: 'Ready to make offer',
  },
  {
    id: 5,
    name: 'Omar Khalid',
    email: 'omar.k@email.com',
    phone: '+966 50 567 8901',
    property: 'A72',
    status: 'contacted',
    date: '2025-10-12',
    message: 'Inquiring about payment plans',
  },
  {
    id: 6,
    name: 'Layla Ibrahim',
    email: 'layla.i@email.com',
    phone: '+966 55 678 9012',
    property: 'Business Oasis',
    status: 'qualified',
    date: '2025-10-11',
    message: 'Commercial space inquiry',
  },
  {
    id: 7,
    name: 'Khaled Mansour',
    email: 'k.mansour@email.com',
    phone: '+966 50 789 0123',
    property: 'Azdan Tower',
    status: 'closed',
    date: '2025-10-10',
    message: 'Purchased unit 205',
  },
  {
    id: 8,
    name: 'Nora Al-Saud',
    email: 'nora.alsaud@email.com',
    phone: '+966 55 890 1234',
    property: 'Narcissus Floor',
    status: 'new',
    date: '2025-10-10',
    message: 'First time buyer',
  },
];

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredLeads = mockLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.property.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="default">New</Badge>;
      case 'contacted':
        return <Badge variant="warning">Contacted</Badge>;
      case 'qualified':
        return <Badge variant="success">Qualified</Badge>;
      case 'closed':
        return <Badge>Closed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const statusCounts = {
    all: mockLeads.length,
    new: mockLeads.filter((l) => l.status === 'new').length,
    contacted: mockLeads.filter((l) => l.status === 'contacted').length,
    qualified: mockLeads.filter((l) => l.status === 'qualified').length,
    closed: mockLeads.filter((l) => l.status === 'closed').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leads</h1>
          <p className="text-slate-600 mt-2">Manage and track your property leads</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Export Leads
        </Button>
      </div>

      <Tabs value={filterStatus} onValueChange={setFilterStatus} className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All ({statusCounts.all})</TabsTrigger>
          <TabsTrigger value="new">New ({statusCounts.new})</TabsTrigger>
          <TabsTrigger value="contacted">Contacted ({statusCounts.contacted})</TabsTrigger>
          <TabsTrigger value="qualified">Qualified ({statusCounts.qualified})</TabsTrigger>
          <TabsTrigger value="closed">Closed ({statusCounts.closed})</TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search leads by name, email, or property..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <TabsContent value={filterStatus} className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-900">{lead.name}</p>
                          <p className="text-sm text-slate-500">{lead.message}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Mail className="w-3 h-3" />
                            <span>{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Phone className="w-3 h-3" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium text-slate-900">{lead.property}</span>
                      </TableCell>
                      <TableCell>{getStatusBadge(lead.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar className="w-3 h-3" />
                          <span>{lead.date}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button size="sm" variant="outline" className="gap-2">
                            <Eye className="w-3 h-3" />
                            View
                          </Button>
                          <Button size="sm" className="gap-2">
                            <Mail className="w-3 h-3" />
                            Contact
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredLeads.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500">No leads found matching your criteria</p>
                </div>
              )}
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}

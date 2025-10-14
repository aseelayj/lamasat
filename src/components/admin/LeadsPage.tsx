import { useState } from 'react';
import { Search, Mail, Phone, Calendar, Download, Eye, MessageSquare, CheckCircle2, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/Table';
import { Badge } from '../ui/Badge';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/Dialog';
import { Label } from '../ui/Label';

const mockLeads = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    email: 'ahmed.rashid@email.com',
    phone: '+966 50 123 4567',
    property: 'Haven',
    propertyId: 'PROP-0002',
    status: 'new',
    priority: 'high',
    date: '2025-10-14',
    time: '14:30',
    message: 'Interested in 3-bedroom unit. Looking to move in within 2 months. Would like to schedule a viewing.',
    budget: '2,500,000',
    source: 'Website',
  },
  {
    id: 2,
    name: 'Fatima Hassan',
    email: 'fatima.h@email.com',
    phone: '+966 55 234 5678',
    property: 'Opal',
    propertyId: 'PROP-0005',
    status: 'contacted',
    priority: 'medium',
    date: '2025-10-13',
    time: '10:15',
    message: 'Looking for luxury apartment with modern amenities.',
    budget: '3,000,000',
    source: 'Phone Call',
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    email: 'm.ali@email.com',
    phone: '+966 50 345 6789',
    property: 'Palace Villa',
    propertyId: 'PROP-0015',
    status: 'new',
    priority: 'high',
    date: '2025-10-13',
    time: '16:45',
    message: 'Want to schedule viewing for this weekend.',
    budget: '4,500,000',
    source: 'Website',
  },
  {
    id: 4,
    name: 'Sarah Abdullah',
    email: 'sarah.a@email.com',
    phone: '+966 55 456 7890',
    property: 'Tulip Plus',
    propertyId: 'PROP-0007',
    status: 'qualified',
    priority: 'high',
    date: '2025-10-12',
    time: '11:20',
    message: 'Ready to make offer. Pre-approved for financing.',
    budget: '2,800,000',
    source: 'Email',
  },
  {
    id: 5,
    name: 'Omar Khalid',
    email: 'omar.k@email.com',
    phone: '+966 50 567 8901',
    property: 'A72',
    propertyId: 'PROP-0004',
    status: 'contacted',
    priority: 'medium',
    date: '2025-10-12',
    time: '09:30',
    message: 'Inquiring about payment plans and financing options.',
    budget: '1,800,000',
    source: 'Website',
  },
  {
    id: 6,
    name: 'Layla Ibrahim',
    email: 'layla.i@email.com',
    phone: '+966 55 678 9012',
    property: 'Business Oasis',
    propertyId: 'PROP-0001',
    status: 'qualified',
    priority: 'high',
    date: '2025-10-11',
    time: '13:00',
    message: 'Commercial space inquiry for real estate office.',
    budget: '5,000,000',
    source: 'Referral',
  },
  {
    id: 7,
    name: 'Khaled Mansour',
    email: 'k.mansour@email.com',
    phone: '+966 50 789 0123',
    property: 'Azdan Tower',
    propertyId: 'PROP-0013',
    status: 'closed',
    priority: 'low',
    date: '2025-10-10',
    time: '15:45',
    message: 'Purchased unit 205. Transaction complete.',
    budget: '3,200,000',
    source: 'Website',
  },
  {
    id: 8,
    name: 'Nora Al-Saud',
    email: 'nora.alsaud@email.com',
    phone: '+966 55 890 1234',
    property: 'Narcissus Floor',
    propertyId: 'PROP-0016',
    status: 'new',
    priority: 'medium',
    date: '2025-10-10',
    time: '10:00',
    message: 'First time buyer. Need assistance with mortgage process.',
    budget: '2,000,000',
    source: 'Social Media',
  },
];

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredLeads = mockLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.propertyId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    const matchesPriority = priorityFilter === 'all' || lead.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
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

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="danger">High</Badge>;
      case 'medium':
        return <Badge variant="warning">Medium</Badge>;
      case 'low':
        return <Badge variant="default">Low</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };

  const statusCounts = {
    all: mockLeads.length,
    new: mockLeads.filter((l) => l.status === 'new').length,
    contacted: mockLeads.filter((l) => l.status === 'contacted').length,
    qualified: mockLeads.filter((l) => l.status === 'qualified').length,
    closed: mockLeads.filter((l) => l.status === 'closed').length,
  };

  const handleViewDetails = (lead: any) => {
    setSelectedLead(lead);
    setIsDetailOpen(true);
  };

  const handleExport = () => {
    console.log('Exporting leads...');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leads Management</h1>
          <p className="text-slate-600 mt-2">Track and manage all property inquiries</p>
        </div>
        <Button className="gap-2" onClick={handleExport}>
          <Download className="w-4 h-4" />
          Export Leads
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Leads</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{mockLeads.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">New Leads</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{statusCounts.new}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Qualified</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{statusCounts.qualified}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Closed</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{statusCounts.closed}</p>
              </div>
              <div className="p-3 bg-slate-100 rounded-lg">
                <X className="w-6 h-6 text-slate-600" />
              </div>
            </div>
          </CardContent>
        </Card>
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
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search by name, email, property, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <TabsContent value={filterStatus} className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Lead Info</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id} className="cursor-pointer hover:bg-slate-50">
                      <TableCell className="font-mono text-sm text-slate-500">
                        {String(lead.id).padStart(3, '0')}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-900">{lead.name}</p>
                          <p className="text-sm text-slate-500 line-clamp-1">{lead.message}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span className="text-xs">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span className="text-xs">{lead.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{lead.property}</p>
                          <p className="text-xs text-slate-500">{lead.propertyId}</p>
                        </div>
                      </TableCell>
                      <TableCell>{getPriorityBadge(lead.priority)}</TableCell>
                      <TableCell>{getStatusBadge(lead.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <div>
                            <p className="text-xs">{lead.date}</p>
                            <p className="text-xs text-slate-500">{lead.time}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleViewDetails(lead)}
                            className="gap-1"
                          >
                            <Eye className="w-3 h-3" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <Mail className="w-3 h-3" />
                            Email
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredLeads.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                  <p className="text-slate-500 font-medium">No leads found</p>
                  <p className="text-sm text-slate-400 mt-1">Try adjusting your search or filters</p>
                </div>
              )}
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>

      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs text-slate-500">Full Name</Label>
                    <p className="font-medium text-slate-900 mt-1">{selectedLead.name}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-slate-500">Email Address</Label>
                    <p className="text-slate-900 mt-1">{selectedLead.email}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-slate-500">Phone Number</Label>
                    <p className="text-slate-900 mt-1">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-slate-500">Lead Source</Label>
                    <p className="text-slate-900 mt-1">{selectedLead.source}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs text-slate-500">Property Interest</Label>
                    <p className="font-medium text-slate-900 mt-1">{selectedLead.property}</p>
                    <p className="text-sm text-slate-500">{selectedLead.propertyId}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-slate-500">Budget Range</Label>
                    <p className="text-slate-900 mt-1">SAR {selectedLead.budget}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-slate-500">Date & Time</Label>
                    <p className="text-slate-900 mt-1">
                      {selectedLead.date} at {selectedLead.time}
                    </p>
                  </div>
                  <div>
                    <Label className="text-xs text-slate-500">Priority</Label>
                    <div className="mt-1">{getPriorityBadge(selectedLead.priority)}</div>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-xs text-slate-500">Message</Label>
                <p className="text-slate-900 mt-2 p-4 bg-slate-50 rounded-lg">{selectedLead.message}</p>
              </div>

              <div className="space-y-3">
                <Label>Update Status</Label>
                <Select defaultValue={selectedLead.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Add Note</Label>
                <Textarea rows={3} placeholder="Add follow-up notes or comments..." />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsDetailOpen(false)}>
                  Close
                </Button>
                <Button className="gap-2">
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

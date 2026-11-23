const members = [
  {
    id: "MEM-0001",
    fullName: "Sara Karimi",
    phone: "0700000000",
    email: "sara@example.com",
    status: "active",
    joinedDate: "2026-11-18",
  },
  {
    id: "MEM-0002",
    fullName: "Ahmad Rahimi",
    phone: "0700000001",
    email: "ahmad@example.com",
    status: "active",
    joinedDate: "2026-11-19",
  },
  {
    id: "MEM-0003",
    fullName: "Mina Ahmadi",
    phone: "0700000002",
    email: "mina@example.com",
    status: "inactive",
    joinedDate: "2026-11-20",
  },
];

export function getAllMembers() {
  return members;
}

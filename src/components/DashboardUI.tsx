"use client";

function MiniLineChart({ color = "#22c55e", trend = "up" }: { color?: string; trend?: string }) {
  const upPath = "M0,30 Q10,28 20,25 T40,20 T60,22 T80,15 T100,18 T120,10";
  const downPath = "M0,10 Q10,12 20,15 T40,20 T60,18 T80,25 T100,22 T120,30";
  return (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="mt-2">
      <path d={trend === "up" ? upPath : downPath} stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

function StatCard({ icon, label, value, change, changeColor, trend }: {
  icon: React.ReactNode; label: string; value: string; change: string; changeColor: string; trend: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[13px] font-medium text-gray-700">{label}</span>
        </div>
        <button className="text-gray-300 hover:text-gray-500 text-xs">×</button>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[22px] font-semibold text-[#020a0f]">{value}</span>
        <span className={`text-[11px] font-medium ${changeColor} flex items-center gap-0.5`}>
          {trend === "up" ? "↗" : "↘"}{change}
        </span>
      </div>
      <MiniLineChart color={trend === "up" ? "#22c55e" : "#ef4444"} trend={trend} />
    </div>
  );
}

function Avatar({ name, color }: { name: string; color: string }) {
  return (
    <div className={`w-7 h-7 rounded-full ${color} flex items-center justify-center text-white text-[10px] font-medium -ml-1.5 first:ml-0 border-2 border-white`}>
      {name.split(" ").map(n => n[0]).join("")}
    </div>
  );
}

export default function DashboardUI() {
  return (
    <div className="flex min-h-[520px] text-left">
      {/* Sidebar */}
      <div className="w-[200px] border-r border-gray-100 p-4 flex flex-col shrink-0">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-xs font-bold">A</div>
          <div>
            <div className="text-[13px] font-medium text-[#020a0f]">Acme</div>
            <div className="text-[11px] text-gray-400">12 members</div>
          </div>
          <svg className="ml-auto w-3 h-3 text-gray-300" viewBox="0 0 12 12"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
        </div>

        <div className="space-y-1">
          {[
            { label: "Dashboard", icon: "⊞", active: true },
            { label: "Calendar", icon: "📅", active: false },
            { label: "Analytics", icon: "📊", active: false },
            { label: "Finance", icon: "💰", active: false },
            { label: "Customers", icon: "👥", active: false },
          ].map((item) => (
            <button key={item.label} className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-[13px] transition-colors ${
              item.active ? "bg-gray-50 text-[#020a0f] font-medium" : "text-gray-500 hover:bg-gray-50"
            }`}>
              <span className="text-[14px] opacity-60">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-2 px-3">Favorites</div>
          <div className="space-y-1">
            {[
              { label: "Design System", color: "bg-orange-400" },
              { label: "Marketing Team", color: "bg-green-400" },
              { label: "Presentation", color: "bg-blue-500" },
            ].map((item) => (
              <button key={item.label} className="flex items-center gap-2.5 w-full px-3 py-1.5 rounded-lg text-[13px] text-gray-500 hover:bg-gray-50">
                <span className={`w-2.5 h-2.5 rounded ${item.color}`}></span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium">KA</div>
            <div>
              <div className="text-[13px] font-medium text-[#020a0f]">Kate Adams</div>
              <div className="text-[11px] text-gray-400">Free plan</div>
            </div>
            <svg className="ml-auto w-3 h-3 text-gray-300" viewBox="0 0 12 12"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 min-w-0">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[20px] font-semibold text-[#020a0f]">Dashboard</h2>
            <p className="text-[13px] text-gray-400">Effortlessly manage your business</p>
          </div>
          <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">+</button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <StatCard
            icon={<span className="text-sm">💰</span>}
            label="Revenue" value="$50,974" change="+25.2%" changeColor="text-green-500" trend="up"
          />
          <StatCard
            icon={<span className="text-sm">📋</span>}
            label="Expenses" value="$7,620" change="+19.8%" changeColor="text-green-500" trend="up"
          />
          <StatCard
            icon={<span className="text-sm">👥</span>}
            label="Customers" value="1,218" change="-12.4%" changeColor="text-red-500" trend="down"
          />
          <StatCard
            icon={<span className="text-sm">📁</span>}
            label="Projects" value="125" change="+7.8%" changeColor="text-green-500" trend="up"
          />
        </div>

        {/* Analytics & Calendar */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Analytics Chart */}
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">📊</span>
                <span className="text-[13px] font-medium text-[#020a0f]">Analytics</span>
              </div>
              <span className="text-gray-300">•••</span>
            </div>
            <div className="flex items-end gap-1 h-[140px]">
              {[
                { label: "Mon", h: 20 }, { label: "Tue", h: 35 }, { label: "Wed", h: 45 },
                { label: "Thu", h: 80, highlight: true }, { label: "Fri", h: 55 },
                { label: "Sat", h: 40 }, { label: "Sun", h: 50 },
              ].map((bar) => (
                <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full relative">
                    {bar.highlight && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#020a0f] text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap">
                        $19,740
                      </div>
                    )}
                    <div
                      className={`w-full rounded-t-md ${bar.highlight ? "bg-green-500" : "bg-gray-100"}`}
                      style={{ height: `${bar.h}%`, minHeight: "20px", maxHeight: `${bar.h * 1.4}px` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-400">{bar.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-0.5 mt-2 ml-1">
              <span className="text-[10px] text-gray-400">$20k</span>
              <span className="text-[10px] text-gray-400">$10k</span>
              <span className="text-[10px] text-gray-400">$5k</span>
              <span className="text-[10px] text-gray-400">$0k</span>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">📅</span>
                <span className="text-[13px] font-medium text-[#020a0f]">Calendar</span>
              </div>
              <span className="text-gray-300">•••</span>
            </div>
            <div className="space-y-3">
              {[
                { date: "22", month: "NOV", title: "Creative Session with James", time: "6:00 PM - 7:00 PM" },
                { date: "25", month: "NOV", title: "Collaboration Meeting with Lisa", time: "3:00 PM - 3:30 PM" },
                { date: "28", month: "NOV", title: "Project Kickoff with Alex", time: "12:00 PM - 2:00 PM" },
              ].map((event) => (
                <div key={event.title} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group">
                  <div className="text-center w-10 shrink-0">
                    <div className="text-[10px] text-red-500 font-medium uppercase">{event.month}</div>
                    <div className="text-[18px] font-semibold text-[#020a0f]">{event.date}</div>
                  </div>
                  <div className="border-l-2 border-orange-400 pl-3 flex-1 min-w-0">
                    <div className="text-[13px] font-medium text-[#020a0f] truncate">{event.title}</div>
                    <div className="text-[11px] text-gray-400">{event.time}</div>
                  </div>
                  <div className="flex -space-x-1.5 shrink-0">
                    <Avatar name="John Doe" color="bg-orange-400" />
                    <Avatar name="Jane Smith" color="bg-blue-500" />
                    <Avatar name="Tom Wilson" color="bg-green-500" />
                  </div>
                  <ChevronIcon />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">👥</span>
              <span className="text-[13px] font-medium text-[#020a0f]">Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-gray-400 text-[12px]">
                🔍 Search
              </div>
              <button className="text-gray-300">⊟</button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-[11px] text-gray-400 border-b border-gray-50">
                <th className="text-left font-medium pb-2 pl-2">↕ Name</th>
                <th className="text-left font-medium pb-2">↕ Created</th>
                <th className="text-left font-medium pb-2">↕ Company</th>
                <th className="text-left font-medium pb-2">◎ Status</th>
                <th className="text-left font-medium pb-2">↕ Contact</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Omar Press", role: "Founder", date: "Jul 22, 10:53 AM", company: "Luminous", domain: "luminous.com", status: "Customer", statusColor: "bg-green-100 text-green-700", companyColor: "bg-green-500" },
                { name: "Abram Curtis", role: "Head of Product", date: "Jul 18, 9:41 AM", company: "Cloud", domain: "cloud.com", status: "Customer", statusColor: "bg-green-100 text-green-700", companyColor: "bg-blue-500" },
                { name: "Maria Donis", role: "Product Manager", date: "Jun 15, 12:45 PM", company: "Proline", domain: "proline.com", status: "Churned", statusColor: "bg-gray-100 text-gray-600", companyColor: "bg-purple-500" },
                { name: "Mike Torello", role: "Marketing Director", date: "Apr 28, 2:15 PM", company: "Springfield", domain: "springfield.com", status: "Churned", statusColor: "bg-gray-100 text-gray-600", companyColor: "bg-yellow-500" },
              ].map((customer) => (
                <tr key={customer.name} className="border-b border-gray-50 last:border-0 text-[13px]">
                  <td className="py-2.5 pl-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-full ${customer.companyColor} flex items-center justify-center text-white text-[10px] font-medium`}>
                        {customer.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-medium text-[#020a0f]">{customer.name}</div>
                        <div className="text-[11px] text-gray-400">{customer.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 text-gray-500 text-[12px]">{customer.date}</td>
                  <td className="py-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-5 h-5 rounded ${customer.companyColor} flex items-center justify-center text-white text-[8px]`}>
                        {customer.company[0]}
                      </div>
                      <div>
                        <div className="text-[12px] font-medium text-[#020a0f]">{customer.company}</div>
                        <div className="text-[10px] text-gray-400">{customer.domain}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium ${customer.statusColor}`}>
                      • {customer.status}
                    </span>
                  </td>
                  <td className="py-2.5">
                    <div className="flex items-center gap-2 text-gray-400">
                      <button className="hover:text-gray-600">📞</button>
                      <button className="hover:text-gray-600">✉️</button>
                      <button className="hover:text-gray-600">⋮</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-300 shrink-0">
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

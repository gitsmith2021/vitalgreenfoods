import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { useGetInquiries } from "@/hooks/useQueries";
import { Inbox, Loader2, LogIn, LogOut, X } from "lucide-react";
import { motion } from "motion/react";

export function AdminPanel({ onClose }: { onClose: () => void }) {
  const { identity, login, clear, isLoggingIn, loginStatus } =
    useInternetIdentity();
  const isAuthenticated = loginStatus === "success" && !!identity;
  const { data: inquiries = [], isLoading } = useGetInquiries();

  const formatDate = (timestamp: bigint) => {
    const ms = Number(timestamp / 1_000_000n);
    return new Date(ms).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden"
        data-ocid="admin.panel"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Inbox size={18} className="text-green-700" />
            <span className="font-semibold text-gray-800 text-base">
              Admin Inbox
            </span>
          </div>
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => clear()}
                className="text-gray-500 hover:text-gray-700 gap-1.5 text-xs"
                data-ocid="admin.logout_button"
              >
                <LogOut size={13} /> Logout
              </Button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              data-ocid="admin.close_button"
              aria-label="Close admin panel"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {!isAuthenticated ? (
            <div className="flex flex-col items-center justify-center h-64 gap-5 px-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-lg mb-1">
                  Admin Access
                </h3>
                <p className="text-gray-500 text-sm">
                  Log in to view contact form submissions.
                </p>
              </div>
              <Button
                onClick={() => login()}
                disabled={isLoggingIn}
                className="bg-green-700 hover:bg-green-800 text-white gap-2"
                data-ocid="admin.login_button"
              >
                {isLoggingIn ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <LogIn size={15} />
                )}
                {isLoggingIn ? "Connecting..." : "Login with Internet Identity"}
              </Button>
            </div>
          ) : isLoading ? (
            <div
              className="flex items-center justify-center h-48 gap-3 text-gray-400"
              data-ocid="admin.loading_state"
            >
              <Loader2 size={18} className="animate-spin" />
              <span className="text-sm">Loading submissions…</span>
            </div>
          ) : inquiries.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center h-48 gap-3 text-gray-400"
              data-ocid="admin.empty_state"
            >
              <Inbox size={32} className="opacity-40" />
              <p className="text-sm">No enquiries yet.</p>
            </div>
          ) : (
            <ScrollArea className="h-full max-h-[calc(90vh-80px)]">
              <Table data-ocid="admin.table">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-xs font-semibold text-gray-500 w-36">
                      Date
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500">
                      Name
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500">
                      Email
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500">
                      Company
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500">
                      Message
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...inquiries]
                    .sort((a, b) => Number(b.timestamp - a.timestamp))
                    .map((inq, idx) => (
                      <TableRow
                        key={`${inq.email}-${String(inq.timestamp)}`}
                        className="hover:bg-gray-50/80 align-top"
                        data-ocid={`admin.row.${idx + 1}`}
                      >
                        <TableCell className="text-xs text-gray-400 whitespace-nowrap py-3">
                          {formatDate(inq.timestamp)}
                        </TableCell>
                        <TableCell className="text-sm font-medium text-gray-800 py-3">
                          {inq.name}
                        </TableCell>
                        <TableCell className="text-sm text-gray-600 py-3">
                          <a
                            href={`mailto:${inq.email}`}
                            className="hover:text-green-700 transition-colors"
                          >
                            {inq.email}
                          </a>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600 py-3">
                          {inq.company || "—"}
                        </TableCell>
                        <TableCell className="text-sm text-gray-600 py-3 max-w-xs">
                          <p className="line-clamp-3 leading-relaxed">
                            {inq.message}
                          </p>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </ScrollArea>
          )}
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import axios from "axios";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { AlertModal } from "@/components/modals/alert-modal";
import { OrderColumn } from "./columns";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";


interface CellActionProps {
  data: OrderColumn;
}

export const CellAction: React.FC<CellActionProps> = ({
  data,
}) => {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeliveryStatus = async (status: string) => {
    try {
      setLoading(true);
      // Make API request to update delivery status
      // await axios.put(`/api/orders/${data.id}/status`, { status });
      toast.success(`Delivery status updated to ${status}`);
    } catch (error) {
      toast.error("Failed to update delivery status");
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };


  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => handleDeliveryStatus("In Progress")} disabled={loading}>
            In Progress
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => handleDeliveryStatus("Delivered")} disabled={loading}>
            Delivered
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
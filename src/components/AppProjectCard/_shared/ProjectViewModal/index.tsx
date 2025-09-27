import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import { AppProjectCard } from "../../AppProjectCard";
import { XIcon } from "lucide-react";

type ProjectProps = {
  project: any;
};
export function ProjectViewModal({ project }: ProjectProps) {
  return (
    <AlertDialogContent className="h-screen/2 max-h-[90vh] overflow-y-auto z-[1000]">
      <AlertDialogHeader className="flex flex-row justify-between items-center gap-2">
        <AlertDialogTitle>{project.name}</AlertDialogTitle>
        <AlertDialogCancel className="p-2 h-auto bg-purple">
          <XIcon className="h-4 w-4 text-white" />
        </AlertDialogCancel>
      </AlertDialogHeader>
      <AppProjectCard project={project} hideBranding />
    </AlertDialogContent>
  );
}

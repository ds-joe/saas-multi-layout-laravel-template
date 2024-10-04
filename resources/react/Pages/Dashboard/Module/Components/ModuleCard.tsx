// Hooks
import useStateForm from "@/hooks/useStateForm";

// Components
import Typography from "@/Components/Global/Custom/Typography";
import Avatar from "@/Components/Global/Custom/Avatar";
import Switch from "@/Components/Global/Custom/Switch";

// Types
import type { Module } from "@/types/Services/Module";
import type { ChangeEvent } from "react";

// Assets
import placeholderImage from "~/images/global/placeholder.png";

// Apis
import usePermission from "@/hooks/usePermission";

const ModuleCard: RC<{ module: Module, formId: string, index: number }> = (props) => {
  const { can } = usePermission();
  const { setColumnData, data } = useStateForm({} as any, props.formId);

  // Handle checked
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    let newData: Array<Module> = [...data.modules];
    newData[props.index] = {
      ...props.module,
      status: e.target.checked.toString()
    };
    setColumnData('modules', newData);
  }

  return (
    <div className="w-full flex justify-between max-md:items-end max-md:flex-col gap-4 px-3 py-4 border rounded hover:scale-105 hover:shadow-md transition-all duration-500">
      <div className="flex max-md:w-full max-md:flex-col justify-between items-center gap-3">
        <Avatar
          className="rounded"
          src={props.module?.image ?? placeholderImage}
        />
        <div className="flex  flex-col gap-2">
          <Typography
            variant="h4"
            className="text-sm"
          >{props.module.name}</Typography>
          <Typography
            variant="h4"
            className="text-xs"
          >{props.module.description}</Typography>
        </div>
      </div>
      <Switch
        {...({} as any)}
        color="blue"
        defaultChecked={props.module.status.toString() == 'true'}
        onChange={handleChecked}
        disabled={!can('update modules')}
      />
    </div>
  )
}

export default ModuleCard;

// Dependencies
import { usePage } from "@inertiajs/react";
import { ChangeEvent, useState } from "react";

// Hooks
import useFormRequest from "@/hooks/useFormRequest";

// Components
import Header from "@/Components/Dashboard/Layout/Header";
import Section from "@/Components/Dashboard/Utils/Section";
import Button from "@/Components/Global/Custom/Button";
import { Card, CardBody, CardTitle } from "@/Components/Global/Custom/Card";
import ModuleCard from "./Components/ModuleCard";
import { Switch } from "@material-tailwind/react";
import Typography from "@/Components/Global/Custom/Typography";

// Layout
import DashboardLayout from "@/Layouts/Dashboard";

// Apis
import { modulesUpdateApi } from "@/api/inertia/dashboard/module";

// Types
import type { Modules } from "@/types/Services/Module";

const Module: RP = () => {
  const { page_words, modules } = usePage().props as ServerPageProps;
  const [filteredModules, setFilteredModules] = useState<Modules>(modules);
  const { call, formId, data } = useFormRequest(modulesUpdateApi, {
    data: {
      modules
    }
  });

  // Handle toggle modules visibility
  const handleToggleModulesVisibility = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredModules((_prev) => {
      const hide = e.target.checked;
      return hide ? data.modules.filter((module) => module.status.toString() == "true") : data.modules;
    })
  }

  return (
    <Section>
      <Header title={page_words?.modules}>
        <Button onClick={() => call()} color="blue" size="sm">Save</Button>
      </Header>
      <div className="grid lg:grid-cols-12 gap-4">
        <Card className="max-lg:order-2 lg:col-span-8">
          <CardBody>
            <Section>
              <CardTitle>{page_words?.modules} <span className="font-medium">( {filteredModules.length} )</span></CardTitle>
              <div className="grid gap-4">
                {
                  filteredModules.map((module, index) => (
                    <ModuleCard key={`module-${index}-${module.name}`} formId={formId} module={module} index={index} />
                  ))
                }
                {
                  filteredModules.length <= 0 && (
                    <Typography className="text-lg w-full text-center opacity-75">{page_words?.no_modules_found}</Typography>
                  )
                }
              </div>
            </Section>
          </CardBody>
        </Card>
        <Card className="max-lg:order-1 lg:col-span-4 h-fit">
          <CardBody>
            <Section>
              <CardTitle>{page_words?.modules_visibility}</CardTitle>
              <Switch
                {...({} as any)}
                label={'Show active only'}
                color="blue"
                onChange={handleToggleModulesVisibility}
                defaultChecked={false}
                labelProps={{
                  className: "text-sm"
                }}
              >
              </Switch>
            </Section>
          </CardBody>
        </Card>
      </div>
    </Section>
  )
}


Module.layout = (page) => <DashboardLayout children={page} title={page.props.page_words?.modules} />;

export default Module;

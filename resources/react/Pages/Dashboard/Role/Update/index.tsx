// Dependencies
import { Link, useForm, usePage } from "@inertiajs/react";

// Hooks
import usePermission from "@/hooks/usePermission";
import useNotification from "@/hooks/useNotification";

// Layout
import DashboardLayout from "@/Layouts/Dashboard";

// Components
import Header from "@/Components/Dashboard/Layout/Header";
import Section from "@/Components/Dashboard/Utils/Section";
import Button from "@/Components/Global/Custom/Button";
import { Card, CardBody, CardTitle } from "@/Components/Global/Custom/Card";
import Collapse from "./Components/Collapse";
import Checkbox from "@/Components/Global/Custom/Checkbox";
import Typography from "@/Components/Global/Custom/Typography";
import Input from "@/Components/Global/Custom/Input";
import Label from "@/Components/Global/Custom/Label";
import Form from "@/Components/Global/Custom/Form";
import { FormGroup } from "@/Components/Global/Custom/Form";

// Types
import type { PermissionModel } from "@/types/Models/Permission";
import { RoleModel } from "@/types/Models/Role";
import { ChangeEvent, FormEvent, useEffect } from "react";

const CreateRole: RP = () => {
  const toast = useNotification();
  const { page_words, permissions, selected_permissions, role } = usePage().props as ServerPageProps<{
    permissions: Array<PermissionModel>;
    selected_permissions: Array<string>;
    role: RoleModel;
  }>;
  const { splitAndSortPermissions } = usePermission();
  const filteredPermissions = splitAndSortPermissions(permissions);
  const { data, setData, errors, put } = useForm({
    permissions: selected_permissions as Array<string>,
    name: role.name as string,
  })

  /**
   * Handle add permission
   *
   * @param { string } permission
   * @return { void }
   */
  const handleAddPermission = (permission: string): void => {
    if (!data.permissions.includes(permission)) {
      setData('permissions', [
        ...data.permissions,
        permission
      ])
    }
  }

  /**
   * Handle remove permission
   *
   * @param { string } permission
   * @return { void }
   */
  const handleRemovePermission = (permission: string): void => {
    setData('permissions', data.permissions.filter((perm) => perm !== permission));
  }

  /**
   * Handle checkbox change
   *
   * @param { ChangeEvent<HTMLInputElement> } e
   * @param { string } permission
   * @return { void }
   */
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, permission: string): void => {
    const checked = e.target.checked;
    if (checked) {
      handleAddPermission(permission)
    } else {
      handleRemovePermission(permission)
    }
  }

  /**
   * Handle form submit
   *
   * @param { FormEvent } e
   * @return { void }
   */
  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    put(route('dashboard.role.update', {
      role: role.id
    }));
  }

  // Check if there're permissions error.
  useEffect(() => {
    if (errors.permissions) {
      toast(errors.permissions, 'error');
    }
  }, [errors])

  return (
    <Section>
      <Header title={page_words?.update_role}>
        <Link href={route('dashboard.roles')}>
          <Button
            color="red"
            size="sm"
          >{page_words?.cancel}</Button></Link>
      </Header>
      <div className="grid lg:grid-cols-12 gap-4">
        <Card className=" lg:col-span-8 h-fit">
          <CardBody>
            <Section>
              <CardTitle>{page_words?.role_information}</CardTitle>
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <Label>{page_words?.name} *</Label>
                  <Input
                    type="text"
                    error={errors.name}
                    defaultValue={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="flex items-center flex-row justify-end">
                  <Button type="submit" color="blue">{page_words?.update}</Button>
                </FormGroup>
              </Form>
            </Section>
          </CardBody>
        </Card>
        <Card className=" lg:col-span-4 h-fit">
          <CardBody>
            <Section>
              <CardTitle>{page_words?.permissions}</CardTitle>
              <div>
                {
                  Object.keys(filteredPermissions).map((permissionName, i1) => (
                    <Collapse
                      key={`permission-parent-${permissionName}-${i1}`}
                      toggle={(
                        <Typography className="flex items-center py-1 capitalize text-sm">{permissionName}</Typography>
                      )}
                    >
                      <div className="py-2 ">
                        {
                          filteredPermissions[permissionName].map((permission, i2) => (
                            <Checkbox
                              key={`permission-child-${permission}-${i2}`}
                              label={permission}
                              className="h-4 w-4"
                              labelProps={{ className: 'text-sm capitalize' }}
                              color="blue"
                              checked={data.permissions.includes(permission)}
                              onChange={(e) => handleCheckboxChange(e, permission)}
                            />
                          ))
                        }
                      </div>
                    </Collapse>
                  ))
                }
              </div>
            </Section>
          </CardBody>
        </Card>
      </div>
    </Section>
  )
}

CreateRole.layout = (page) => <DashboardLayout title={page.props.page_words?.update_role} children={page} />

export default CreateRole;

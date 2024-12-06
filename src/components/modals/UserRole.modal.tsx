// components/RoleModal.tsx
"use client"

import { Button } from "@/components/ui/Button";
import ButtonSelect from '../ui/ButtonSelect';
import { useState } from "react";
import { useUpdateRoleUser } from "@/hooks/queries/users/useUpdateRoleUser";
import { Loader } from "../ui/Loader";
import { IUser, IUserRole } from "@/shared/types/user.interface";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";

const selectTableValues = [
    {
      value: "user",
      label: "User",
    },
    {
      value: "admin",
      label: "Admin",
    }
]

interface UserRoleModalProps {
    userId: string,
    userRole: string
}

const UserRoleModal: React.FC<UserRoleModalProps> = ({userId, userRole}) => {
    const [value, setValue] = useState(userRole)
    const {updateRole, isLoading} = useUpdateRoleUser()

    const handleSubmit = () => {
        const data:IUserRole = {
            id: userId,
            role: value
        }
        updateRole(data)
    };

    return (
        <div>
            <Card>
                <CardHeader className="items-center text-center">
                    <CardTitle>Изменить роль</CardTitle>
                </CardHeader>
                <CardContent className="items-center">
                    <ButtonSelect className='mb-4 w-[10rem] justify-between' value={value} setValue={setValue} selectTableValues={selectTableValues} ></ButtonSelect>
                </CardContent>
                <CardFooter className="items-center">
                    {isLoading ? (
                        <Loader/>
                    ) : (
                        <Button className="w-full" onClick={handleSubmit}>Сохранить</Button>
                    )}
                </CardFooter>
            </Card>
        </div>

        // <div className='flex flex-col'>
        //     <h2 className='mb-4 text-center' >Изменить роль</h2>
        //     <ButtonSelect className='mb-4 w-[10rem] justify-between' value={value} setValue={setValue} selectTableValues={selectTableValues} ></ButtonSelect>
        //     {isLoading ? (
        //         <Loader/>
        //     ) : (
        //         <Button onClick={handleSubmit}>Сохранить</Button>
        //     )}
        // </div>
    );
};

export default UserRoleModal;
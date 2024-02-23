import { FormGrid, FormItem, Input} from '@formily/antd';
import { Field, VoidField } from '@formily/react';

/**
 * 基本信息接口声明
 */
export interface IBasicData {
    name: string
    gender: string
    age: string
    city: string
    phoneNumber: string
    email: string
}
/**
 * 基本的信息
 * @returns 
 */
export const BasicData = () => {
    return (
        <VoidField name='basic' decorator={[FormItem]}>
            <FormGrid maxColumns={3}>
                <Field name='name' component={[Input, { placeholder: '姓名'}]}></Field>
                <Field name='gender' component={[Input, { placeholder: '性别'}]}></Field>
                <Field name='age' component={[Input, { placeholder: '年龄'}]}></Field>
                <Field name='city' component={[Input, { placeholder: '城市'}]}></Field>
                <Field name='phoneNumber' component={[Input, { placeholder: '电话号码'}]}></Field>
                <Field name='email' component={[Input, { placeholder: '邮箱'}]}></Field>
            </FormGrid>
        </VoidField>
    )
}
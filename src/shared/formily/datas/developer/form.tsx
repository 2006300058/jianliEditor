import { Form, FormGrid, FormItem } from '@formily/antd';
import { Field } from '@formily/react';
import { Input } from 'antd';
import { BasicData } from '../../form/basic';
import { TitleContentArray } from '../../form/titleContentArray';
import { TitleContentTimeRangeArray } from '../../form/titleContentTimeRangeArray';

/**
 * 
 * 表单基本信息
 */
export const DataForm = () => {
    return (
        <Form layout='vertical'>
            <h3>基础信息</h3>
            <BasicData />
            <h3>求职意向</h3>
            <Field name='target' component={[Input]} decorator={[FormItem]} />
            <h3>教育信息</h3>
            <Field name='education' decorator={[FormItem]}>
                <FormGrid>
                    <Field name="schoolName" component={[Input, { placeholder: '学校' }]} />
                    <Field name="major" component={[Input, { placeholder: '专业' }]} />
                    <Field name="degree" component={[Input, { placeholder: '学位' }]} />
                </FormGrid>
            </Field>

            <h3>技能特长</h3>
            <Field name='skill' component={[Input.TextArea, {autoSize: true}]} decorator={[FormItem]}></Field>

            <h3>工作经历</h3>
            <TitleContentTimeRangeArray name='workingHistory' titlePlaceholder='公司名称' contentPlaceholder='工作内容'/>

            <h3>项目经历</h3>
            <TitleContentArray name='projects' titlePlaceholder='项目名称' contentPlaceholder='项目描述'/>

            <h3>github链接</h3>
            <Field name='github' component={[Input]} decorator={[FormItem]}/>

            <h3>个人经历</h3>
            <Field name='aboutMe' component={[Input.TextArea, { autoSize: true}]}/>
        </Form>
    )
}
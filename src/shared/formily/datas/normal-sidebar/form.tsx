import { Form, Input } from "@formily/antd";
import { Field } from "@formily/react";
import { BasicData } from "../../form/basic";
import { TitleContentArray } from "../../form/titleContentArray";
import { TitleContentTimeRangeArray } from "../../form/titleContentTimeRangeArray";

/**
 * 
 * 第二套模板
 */
export const DataForm = () => {
    return (
        <Form layout='vertical'>
            <h3>基础信息</h3>
            <BasicData />
            <h3>侧栏配置</h3>
            <TitleContentArray name="sidebar" />
            <h3>工作经历</h3>
            <TitleContentTimeRangeArray name="workingHistory" />
            <h3>项目经历</h3>
            <TitleContentArray name='projects' titlePlaceholder='项目名称' contentPlaceholder='项目描述' />
            <h3>专业技能</h3>
            <Field name='skill' component={[Input.TextArea, { autoSize: true }]} />
        </Form>
    )
}
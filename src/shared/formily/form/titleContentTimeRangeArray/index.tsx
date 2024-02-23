import styles from './index.mudule.scss';
import { ArrayBase, ArrayItems, FormItem, Input } from '@formily/antd';
import { Space } from 'antd';
import { FC } from 'react';
import { ArrayField, Field } from '@formily/react';

interface TitleContentTimeRangeArrayProps {
    name: string
    titlePlaceholder?: string
    contentPlaceholder?: string
}

export const TitleContentTimeRangeArray: FC<TitleContentTimeRangeArrayProps> = ({ name, titlePlaceholder, contentPlaceholder }) => {
    return (
        <FormItem>
            <div className={styles.index}>
                <ArrayField name={name}>
                    {(field) => (
                        <ArrayBase>
                            {field.value.map((_, index) => {
                                return (
                                    <div key={index} className={styles.item}>
                                        <Field name={index}>
                                            <div style={{ display: 'flex' }}>
                                                <Field name="title" component={[Input, { placeholder: titlePlaceholder }]} />
                                                <Space>
                                                    <ArrayItems.MoveUp index={index} />
                                                    <ArrayItems.Remove index={index} />
                                                </Space>
                                            </div>
                                            <Field
                                                name="content"
                                                component={[Input.TextArea, { autoSize: true, placeholder: contentPlaceholder }]}
                                            />
                                        </Field>
                                    </div>
                                )
                            })}

                            <div className={styles.add}>
                                <ArrayItems.Addition title="添加" defaultValue={{ title: '', content: '', startTime: '', endTime: '' }} />
                            </div>
                        </ArrayBase>
                    )}
                </ArrayField>
            </div>
        </FormItem>
    )
}
TitleContentTimeRangeArray.defaultProps = {
    titlePlaceholder: '请输入标题',
    contentPlaceholder: "请输入内容"
}
import { Field, FieldProps } from 'formik';
import React from 'react';
import { Icon, Input, Popover } from '@deriv/components';
import { localize } from '@deriv/translations';
import { data_fields } from '.';
import { TDataFields } from './data/data-fields';
import { TDataUniqInput } from './data/data-uniq-input-obj';
import { TFormValues, TInputBaseFields, TInputCommonFields } from '../q-strategy.types';
import { TInputFieldProps } from './q-strategy-components.types';

const InputField = ({
    idx,
    handleChange,
    onChangeInputValue,
    setCurrentFocus,
    is_mobile,
    field_name,
    id,
    className,
    label_className,
    field_className,
    label,
    input_value,
    placeholder,
    isUniqStrategyField,
    trailing_icon_message,
    zIndex,
    uniq_selected_input,
    errors,
}: TInputFieldProps) => {
    const dataField = () => {
        if (isUniqStrategyField) {
            return uniq_selected_input;
        }
        return idx ? (data_fields[idx + 1] as TDataFields) : {};
    };

    const {
        field_name: new_field_name,
        id: new_id,
        className: new_className,
        label_className: new_label_className,
        field_className: new_field_className,
        label: new_label,
        input_value: new_input_value,
        placeholder: new_placeholder,
        trailing_icon_message: new_trailing_icon_message,
        zIndex: new_zIndex,
    } = dataField() as TDataUniqInput | TDataFields;

    return (
        <Field name={field_name || new_field_name} key={id || new_id} id={id || new_id}>
            {({ field }: FieldProps<string, TFormValues>) => {
                return (
                    <Input
                        {...field}
                        className={className || new_className}
                        label_className={label_className || new_label_className}
                        field_className={field_className || new_field_className}
                        type='text'
                        error={errors[(field.name as keyof typeof errors) || (new_field_name as keyof typeof errors)]}
                        label={localize(label || new_label)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            handleChange(e);
                            onChangeInputValue(
                                input_value
                                    ? (input_value as TInputBaseFields)
                                    : (new_input_value as TInputCommonFields),
                                e
                            );
                        }}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => setCurrentFocus(e.currentTarget.name)}
                        onBlur={() => setCurrentFocus(null)}
                        placeholder={placeholder || new_placeholder}
                        trailing_icon={
                            <Popover
                                alignment={is_mobile ? 'top' : 'bottom'}
                                message={localize(trailing_icon_message || new_trailing_icon_message)}
                                zIndex={zIndex || new_zIndex}
                            >
                                <Icon icon='IcInfoOutline' />
                            </Popover>
                        }
                    />
                );
            }}
        </Field>
    );
};

export default React.memo(InputField);

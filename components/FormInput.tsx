import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea: true;
}

type FormInputProps = InputProps | TextareaProps;

export default function FormInput(props: FormInputProps) {
  const { label, error, ...rest } = props;
  const id = rest.name || label.toLowerCase().replace(/\s+/g, '-');

  const baseClasses = `w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
    error ? 'border-red-500' : 'border-gray-300'
  }`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {'textarea' in props && props.textarea ? (
        <textarea
          id={id}
          className={`${baseClasses} resize-none`}
          rows={4}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={baseClasses}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

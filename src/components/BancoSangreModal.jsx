import { Droplet, X } from 'lucide-react';
import { useState } from 'react';

const INITIAL_FORM = { nombre: '', dni: '', telefono: '', direccion: '' };

function validate(form) {
  const errors = {};

  if (!form.nombre.trim()) {
    errors.nombre = 'Ingresá tu nombre completo.';
  } else if (form.nombre.trim().length < 3) {
    errors.nombre = 'El nombre debe tener al menos 3 caracteres.';
  }

  if (!form.dni.trim()) {
    errors.dni = 'Ingresá tu DNI.';
  } else if (!/^\d{7,8}$/.test(form.dni.trim())) {
    errors.dni = 'El DNI debe tener 7 u 8 dígitos, sin puntos.';
  }

  if (!form.telefono.trim()) {
    errors.telefono = 'Ingresá un teléfono de contacto.';
  } else if (!/^[\d\s-]{6,15}$/.test(form.telefono.trim())) {
    errors.telefono = 'Ingresá un teléfono válido.';
  }

  if (!form.direccion.trim()) {
    errors.direccion = 'Ingresá tu dirección.';
  } else if (form.direccion.trim().length < 5) {
    errors.direccion = 'Ingresá una dirección completa.';
  }

  return errors;
}

export default function BancoSangreModal({ open, onClose, onSuccess }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm(INITIAL_FORM);
      onSuccess();
      onClose();
    }, 600);
  };

  const handleClose = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="banco-sangre-modal-title"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-on-background/50"
      onClick={handleClose}
    >
      <div
        className="bg-surface-container-lowest rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-margin-mobile border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-error-container rounded-full flex items-center justify-center text-error shrink-0">
              <Droplet size={22} />
            </div>
            <div>
              <h2 id="banco-sangre-modal-title" className="text-headline-sm text-on-surface">
                Pre-inscripción Banco de Sangre
              </h2>
              <p className="text-body-md text-on-surface-variant">
                Completá tus datos y te contactaremos a la brevedad.
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Cerrar"
            onClick={handleClose}
            className="text-on-surface-variant hover:text-on-surface shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-margin-mobile flex flex-col gap-stack-md">
          <Field
            id="nombre"
            label="Nombre completo"
            value={form.nombre}
            onChange={handleChange('nombre')}
            error={errors.nombre}
            placeholder="Ej: María González"
          />
          <Field
            id="dni"
            label="DNI"
            value={form.dni}
            onChange={handleChange('dni')}
            error={errors.dni}
            placeholder="Ej: 30123456"
            inputMode="numeric"
          />
          <Field
            id="telefono"
            label="Teléfono"
            value={form.telefono}
            onChange={handleChange('telefono')}
            error={errors.telefono}
            placeholder="Ej: 3548-123456"
            inputMode="tel"
          />
          <Field
            id="direccion"
            label="Dirección"
            value={form.direccion}
            onChange={handleChange('direccion')}
            error={errors.direccion}
            placeholder="Ej: Av. Edén 123, La Falda"
          />

          <div className="flex flex-col sm:flex-row gap-3 mt-stack-sm">
            <button
              type="button"
              onClick={handleClose}
              className="border border-outline-variant text-on-surface text-label-md px-6 py-3 rounded-lg min-h-[48px] flex-1"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="bg-error hover:bg-on-error-container text-on-error text-label-md px-6 py-3 rounded-lg min-h-[48px] flex-1 disabled:opacity-60"
            >
              {submitting ? 'Enviando…' : 'Confirmar Adhesión'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ id, label, value, onChange, error, placeholder, inputMode }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-label-md text-on-surface">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`min-h-[48px] rounded-lg border px-4 py-3 text-body-md text-on-surface bg-surface-container-lowest focus:outline-none focus:border-2 focus:border-primary ${
          error ? 'border-error' : 'border-outline-variant'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-error text-body-md">
          {error}
        </p>
      )}
    </div>
  );
}

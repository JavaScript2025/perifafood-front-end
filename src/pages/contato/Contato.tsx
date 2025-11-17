import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const err: { [key: string]: string } = {};
    if (!form.name.trim()) err.name = "Nome é obrigatório.";
    if (!form.email.trim()) err.email = "Email é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Email inválido.";
    if (!form.subject.trim()) err.subject = "Assunto é obrigatório.";
    return err;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl shadow-md text-sm animate-pulse">
        Página em construção — envio ainda não disponível
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <main className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Fale conosco
            </h1>
            <p className="text-sm text-gray-500">
              Preencha o formulário e entraremos em contato.
            </p>
          </header>

          {submitted && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800">
              Mensagem enviada com sucesso! Obrigado.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Nome</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  required
                  aria-required
                  className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  aria-required
                  className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="seu@exemplo.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">
                  Assunto
                </span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  required
                  aria-required
                  className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 ${
                    errors.subject ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Sobre o que é?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
                )}
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-white font-medium shadow-sm transition-transform active:scale-95"
                  style={{
                    background:
                      "linear-gradient(90deg, #ff7a00 0%, #ff3b3b 100%)",
                  }}
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

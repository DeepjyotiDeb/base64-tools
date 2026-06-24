import { useState } from "react";

export default function Base64ToPdf() {
  const [value, setValue] = useState("");

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = e.clipboardData.getData("text");
    try {
      const parsed = JSON.parse(pastedText);
      e.preventDefault();
      setValue(parsed.body || "");
    } catch {
      // Not JSON — use raw value
    }
  };

  return (
    <main className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)]" />

      <div className="relative mx-auto flex w-full items-center px-4 py-8 sm:px-6 lg:px-8 ">
        <section className="w-full rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_-40px_rgba(0,0,0,0.7)] sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-2">
            <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              Base64 PDF preview
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Paste a JSON payload or raw base64 PDF.
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
              The editor accepts clipboard JSON with a{" "}
              <span className="font-medium text-slate-900 dark:text-slate-100">body</span> field,
              then renders the PDF immediately.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(400px,1.28fr)]">
            <label className="flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition-colors focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-950/60 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Input
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-500">
                  Paste a PDF payload here
                </span>
              </div>
              <textarea
                name="base64Input"
                aria-label="Base64 PDF input"
                onPaste={handlePaste}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Paste JSON with a body field or raw base64 PDF..."
                className="flex-1 max-h-72 resize-none overflow-y-auto rounded-xl border border-dashed border-slate-300 bg-white/90 p-4 font-mono text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:placeholder:text-slate-600"
              />
            </label>

            <div className="flex min-h-96 flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Preview
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-500">
                  {value ? "Live render" : "Waiting for input"}
                </span>
              </div>

              <div className="flex min-h-0 flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-900/70">
                {value ? (
                  <object
                    data={`data:application/pdf;base64,${value}`}
                    type="application/pdf"
                    className="h-full w-full"
                    style={{ minHeight: "480px" }}
                  >
                    <iframe
                      src={`data:application/pdf;base64,${value}`}
                      className="h-full w-full"
                      style={{ border: "none", minHeight: "480px" }}
                      title="PDF preview"
                    >
                      <p className="p-4 text-sm text-slate-600 dark:text-slate-400">
                        Your browser does not support embedded PDFs.{" "}
                        <a
                          href={`data:application/pdf;base64,${value}`}
                          download="output.pdf"
                          className="underline hover:text-slate-900 dark:hover:text-slate-100"
                        >
                          Download instead.
                        </a>
                      </p>
                    </iframe>
                  </object>
                ) : (
                  <div className="flex flex-1 items-center justify-center p-4">
                    <div className="max-w-sm text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Your PDF preview will appear here once the base64 data is pasted.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

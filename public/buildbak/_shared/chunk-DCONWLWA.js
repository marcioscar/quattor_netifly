import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-H6GKT65D.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/Modal.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "justify-center bg-white/80  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
      onClick: onClose,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "dialog",
        {
          className: "relative w-auto my-6 mx-auto max-w-3xl ",
          open: true,
          onClick: (event) => event.stopPropagation(),
          children
        },
        void 0,
        false,
        {
          fileName: "app/components/Modal.jsx",
          lineNumber: 8,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/Modal.jsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}
var Modal_default = Modal;

export {
  Modal_default
};
//# sourceMappingURL=/build/_shared/chunk-DCONWLWA.js.map

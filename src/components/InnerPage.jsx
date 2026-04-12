/** Clears content below the fixed navbar (includes safe-area under notch / status bar). */
export function InnerPage({ children }) {
  return (
    <div className="pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-[calc(5rem+env(safe-area-inset-top,0px))]">
      {children}
    </div>
  );
}

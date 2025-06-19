import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <div className="legal-footer">
        <p>© 2018-2025 Recooty. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;

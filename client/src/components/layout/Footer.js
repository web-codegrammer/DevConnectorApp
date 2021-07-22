import React from "react";

//no lifecycle method needed

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
	<div className="footer-copyright text-center">
      Copyright &copy; {new Date().getFullYear()} {"< DevConnector />"}
	</div>
    </footer>
  );
}

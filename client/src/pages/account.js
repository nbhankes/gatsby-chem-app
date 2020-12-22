import { Router } from "@reach/router"
import Billing from "../components/billing"
import Settings from "../components/settings"
import Home from "../components/home"
import Logout from "../components/logout"

import React from "react"

export default function account() {
  return (
    <>
      <Router>
        <Home path="/account/home" />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
        <Logout path="/account/logout" />
      </Router>
    </>
  )
}

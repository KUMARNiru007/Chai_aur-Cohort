import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useCartStore } from '../store/cartStore.js';

import {useNotification} from '../context/NotificationContext.jsx'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const {count} = useNotification();

  const cartCount = useCartStore((state) => state.cart.length)
  const addToCart = useCartStore((state) => state.addToCart)
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link to="/products" className="[&.active]:font-bold">
          Products
        </Link>
      </div>
      <hr />
      <Outlet />  
      <TanStackRouterDevtools />

    </React.Fragment>
  )
}

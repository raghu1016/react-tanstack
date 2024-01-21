import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http.js";

import Events from "./components/Events/Events.jsx";
import EventDetails from "./components/Events/EventDetails.jsx";
import NewEvent from "./components/Events/NewEvent.jsx";
import EditEvent, {
  loader as editEventLoader,
} from "./components/Events/EditEvent.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Navigate to="/events" />,
  // },
  {
    path: "/react-tanstack",
    element: <Navigate to="/react-tanstack/events" />,
  },
  {
    path: "/react-tanstack/events",
    element: <Events />,

    children: [
      {
        path: "/react-tanstack/events/new",
        element: <NewEvent />,
      },
    ],
  },
  {
    path: "/react-tanstack/events/:id",
    element: <EventDetails />,
    children: [
      {
        path: "/react-tanstack/events/:id/edit",
        element: <EditEvent />,
        loader: editEventLoader,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

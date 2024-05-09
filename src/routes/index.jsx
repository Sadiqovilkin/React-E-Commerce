
export const ROUTES = [
  //admin root
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "countries",
        element: <AdminCountries />,
      },
      {
        path: "countries/:id",
        element: <AdminCountryDetail />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "add-country",
        element: <AddCountry />,
      },
    ],
  },
  //client root
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "countries",
        element: <ClientCountries />,
      },
      {
        path: "countries/:id",
        element: <ClientCountryDetail />,
      },
    ],
  },
];

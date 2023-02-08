import React, {
  createContext,
  useReducer,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from "react";

import GlobalModal from "./components/global-modal";

const themes = {
  dark: {
    primary: "#56d000",
    secondary: "#ff0000",
  },
  light: {
    primary: "#ff0000",
    secondary: "#b5d098",
  },
};

const initialState = {
  count: 0,
  x: 100,
  y: 200,
  z: 300,
};

// const store = {};

export const ThemedContext = createContext({ theme: themes.dark });
// const AuthContext = createContext();
export const StoreContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((val) => {
      const ret = val === "light" ? "dark" : "light";
      return ret;
    });
  };
  const passVal = useMemo(() => {
    return {
      theme: themes[theme],
      toggleTheme,
    };
  }, [theme]);

  return (
    <ThemedContext.Provider
      value={{
        theme: themes[theme],
        toggleTheme,
      }}
    >
      {children}
    </ThemedContext.Provider>
  );
};

// function updateStore() {

// }

function reducer(state, action) {
  switch (action.type) {
    case "COUNT":
      return { ...state, count: action.value };
    case "two":
      return { ...state, b: action.value };
    default:
      return { ...state };
  }
}

export const StoreProvider = ({ children }) => {
  console.log("in store provider");
  return (
    <StoreContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StoreContext.Provider>
  );
};

// const [state, dispatch] = useReducer(reducer, initialState);

const modalState = {
  activeModal: "",
};

export const ModalList = {
  Modal_One: "COMPONENT_ONE",
  Modal_Two: "COMPONENT_Two",
};
export const ModalContext = createContext(modalState);
export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState({ name: "" });

  const updateModal = (name) => {
    setModal(name);
  };
  const hideModal = () => {
    setModal(null);
  };
  const modalValues = useMemo(() => {
    return {
      modal: modal,
      updateModal: updateModal,
      hideModal: hideModal,
    };
  }, []);
  const displayModal = () => {
    if (!ModalList[modal]) {
      return null;
    }
    return <GlobalModal onClose={hideModal}>{ModalList[modal]}</GlobalModal>;
  };
  return (
    <ModalContext.Provider value={modalValues}>
      {displayModal()}
      {children}
    </ModalContext.Provider>
  );
};

export const LightContext = createContext({
  activeColor: "red",
  lights: [],
});

const delay = (duration) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("");
    }, duration);
  });
};

const lights = [
  {
    color: "red",
    duration: "8000",
  },
  {
    color: "green",
    duration: "5000",
  },
  {
    color: "yellow",
    duration: "1000",
  },
];

export const LightContextProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState("red");
  useEffect(() => {
    const initLights = async () => {
      for (let i = 0; i < lights.length; i++) {
        setActiveColor(lights[i].color);
        await delay(lights[i].duration);
      }
    };
    initLights();
  }, []);
  return (
    <LightContext.Provider value={{ lights, activeColor }}>
      {children}
    </LightContext.Provider>
  );
};

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DetailsIcon from "@mui/icons-material/Details";
import PermMediaIcon from "@mui/icons-material/PermMedia";

import { Loading } from "../components/Loading";
import { BookDetails } from "../components/BookDetails";
import { BookImages } from "../components/BookImages";

import { selectBook } from "../store/slices/book.slice";

import { getBook } from "../store/actions/book.actions";

const tabs = [
  {
    label: "detalles",
    value: "details",
    icon: <DetailsIcon />,
  },
  {
    label: "imagenes",
    value: "images",
    icon: <PermMediaIcon />,
  },
];

const Book = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [activeTab, setActiveTab] = useState("details");

  const book = useSelector(selectBook);

  function toggleActiveTab(tabValue) {
    setActiveTab(tabValue);
  }

  const TabsButtons = () => {
    return (
      <ButtonGroup fullWidth color="secondary" size="large">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            name={tab.value}
            disabled={activeTab === tab.value}
            onClick={() => toggleActiveTab(tab.value)}
            startIcon={tab.icon}
          >
            {tab.label}
          </Button>
        ))}
      </ButtonGroup>
    );
  };

  useEffect(() => {
    dispatch(getBook(params.id));
    // window.scrollTo(0, 0);
  }, [dispatch, getBook]);

  return (
    <Box width="100%">
      {Object.keys(book).length > 0 ? (
        <>
          <Box
            height={
              document.getElementById("header") &&
              window.innerHeight -
                document.getElementById("header").clientHeight
            }
            sx={{
              backgroundImage: `url(${
                import.meta.env.VITE_API_URL +
                book.secondaryImage.path.replace("uploads", "")
              })`,
              backgroundPosition: "center 60%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <Box height="100%" sx={{ bgcolor: "rgba(23, 23, 23, 0.9)" }}>
              <Box
                component={Container}
                disableGutters
                display="grid"
                gridTemplateColumns="repeat(12, minmax(0, 1fr))"
                columnGap={1}
                sx={{ placeItems: "center" }}
              >
                {/* FIRST SECTION */}
                <Box
                  gridColumn={{ xs: "span 12", lg: "span 7" }}
                  display="grid"
                  gridTemplateColumns={"repeat(4, 1fr)"}
                  p={{ xs: 1.5, lg: 0 }}
                  sx={{ placeItems: "center" }}
                >
                  {activeTab === "details" ? (
                    <>
                      <Box
                        gridColumn={{ xs: "span 12", sm: "span 2" }}
                        display="flex"
                      >
                        <Box
                          component="img"
                          height="330px"
                          src={
                            import.meta.env.VITE_API_URL +
                            book.cover.path.replace("uploads", "")
                          }
                        />
                      </Box>
                      <Box
                        gridColumn={{ xs: "span 12", sm: "span 2" }}
                        display="flex"
                        flexDirection="column"
                        px={{ xs: 1.5, lg: 1 }}
                        py={{ xs: 1.5, lg: 0 }}
                      >
                        <Box display="flex" gap={1.5} alignItems="center">
                          <Typography
                            variant="h6"
                            fontFamily="Cinzel"
                            fontWeight={700}
                          >
                            {book.type}
                          </Typography>
                          <Chip
                            size="small"
                            variant="outlined"
                            label={
                              <Typography
                                variant="subtitle1"
                                fontFamily="cinzel"
                                fontWeight="bold"
                              >
                                {book.genre.ageRange}
                              </Typography>
                            }
                            color="secondary"
                          />
                        </Box>

                        <Typography variant="h2">{book.name}</Typography>
                        <Typography
                          variant="h5"
                          fontFamily="Bellefair"
                          sx={{ p: 1 }}
                        >
                          {book.description}
                        </Typography>
                      </Box>
                    </>
                  ) : (
                    <Box width="100%">
                      <BookImages book={book} />
                    </Box>
                  )}
                </Box>

                {/* SECOND SECTION */}
                <Box
                  gridColumn={{ xs: "span 12", lg: "span 5" }}
                  display="grid"
                  minHeight={531}
                >
                  <Box
                    gridColumn={{
                      xs: "span 5",
                      lg: activeTab === "details" ? "span 12" : "span 12",
                    }}
                  >
                    <Box p={1.5}>
                      <TabsButtons />
                    </Box>
                    <Box display="flex" minHeight={450}>
                      <BookDetails book={book} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default Book;

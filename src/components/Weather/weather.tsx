import React, { useState } from "react";
import WeatherDetail from "../DisplayWeather/WeatherDetail";
import {
  Container,
  FormContainer,
  Input,
  SubmitButton,
  Title,
  Wrapper,
} from "./weatherStyles";

const Weather = () => {
  const [locationData, setLocationData] = useState({
    city: "",
    country: "",
  });

  const [weatherData, setWeatherData] = useState<any>([]);

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setLocationData({ ...locationData, city: value });
    }
    if (name === "country") {
      setLocationData({ ...locationData, country: value });
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (locationData.city === "") {
      alert("Please Add City!");
    } else if (locationData.country === "") {
      alert("Please Add Country!");
    } else {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationData.city},${locationData.country}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeatherData({ data: result });
    }
  };

  return (
    <Container>
      <Title>Weather App</Title>
      <br />
      <Wrapper>
        <FormContainer>
          <Input
            type="text"
            placeholder="Enter Your Location / City"
            name="city"
            onChange={(e) => handleChange(e)}
          />
          &nbsp; &nbsp; &nbsp;&nbsp;
          <Input
            type="text"
            placeholder="Enter Your Country"
            name="country"
            onChange={(e) => handleChange(e)}
          />
          <SubmitButton onClick={(e) => handleSubmit(e)}>
            Get Weather
          </SubmitButton>
        </FormContainer>

        {weatherData.data !== undefined ? (
          <div>
            <WeatherDetail data={weatherData.data} />
          </div>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Weather;

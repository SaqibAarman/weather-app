import {
  ColumnName,
  Container,
  Description,
  DetailSection,
  Heading,
  Icon,
  LeftSection,
  MainCardSubTitle,
  MainCardTitle,
  MainTitle,
  RightSection,
  TableData,
  TableDataSpan,
  WrapperMain,
} from "./WeatherDetailStyles";

const WeatherDetail = ({ data }: any) => {
  const iconUrl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";

  return (
    <Container>
      {data.cod !== 404 ? (
        <>
          <WrapperMain>
            <MainCardTitle>
              {data.name} , {data.sys.country}. Weather
            </MainCardTitle>

            <MainCardSubTitle>
              As of {new Date().toLocaleTimeString()}
            </MainCardSubTitle>

            {/* Converting to Degree */}
            <Heading>
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </Heading>

            <MainTitle>{data.weather[0].main}</MainTitle>
            <Icon src={iconUrl} alt="Weather Icon" />
            <Description>{data.weather[0].description}</Description>
          </WrapperMain>

          <DetailSection>
            <RightSection>
              <table>
                <tr>
                  <TableData>
                    <ColumnName>High / Low</ColumnName>
                  </TableData>

                  <TableData>
                    <TableDataSpan>
                      {Math.floor(data.main.temp_max - 273.15)}
                    </TableDataSpan>
                    {" / "}

                    <TableDataSpan>
                      {Math.floor(data.main.temp_min - 273.15)}
                    </TableDataSpan>
                  </TableData>
                </tr>

                <tr>
                  <TableData>
                    <ColumnName>Humidity</ColumnName>
                  </TableData>

                  <TableData>
                    <TableDataSpan>{data.main.humidity}</TableDataSpan>
                    {" % "}
                  </TableData>
                </tr>

                <tr>
                  <TableData>
                    <ColumnName>Pressure</ColumnName>
                  </TableData>

                  <TableData>
                    <TableDataSpan>{data.main.pressure}</TableDataSpan>
                    {" hPa "}
                  </TableData>
                </tr>

                <tr>
                  <TableData>
                    <ColumnName>Visibility</ColumnName>
                  </TableData>

                  <TableData>
                    <TableDataSpan>{data.visibility / 1000}</TableDataSpan>
                    {" km "}
                  </TableData>
                </tr>
              </table>
            </RightSection>

            <LeftSection>
              <table>
                <tr>
                  <TableData>
                    <ColumnName>Wind</ColumnName>
                  </TableData>

                  <TableData>
                    <TableDataSpan>
                      {Math.floor((data.wind.speed * 18) / 5)}
                    </TableDataSpan>
                    {" km/hr "}
                  </TableData>
                </tr>

                <tr>
                  <TableData>
                    <ColumnName>Wind Direction</ColumnName>
                  </TableData>

                  <TableData>
                    <TableDataSpan>{data.wind.deg}</TableDataSpan>
                    <sup>o</sup>
                    {" deg"}
                  </TableData>
                </tr>

                <tr>
                  <TableData>
                    <ColumnName>Sun Rises</ColumnName>
                  </TableData>

                  <TableData>
                    <TableDataSpan>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </TableDataSpan>
                  </TableData>
                </tr>

                <tr>
                  <TableData>
                    <ColumnName>Sun Sets</ColumnName>
                  </TableData>

                  <TableData>
                    <TableDataSpan>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </TableDataSpan>
                  </TableData>
                </tr>
              </table>
            </LeftSection>
          </DetailSection>
        </>
      ) : (
        <WrapperMain>
          <h2>{data.message}</h2>
        </WrapperMain>
      )}
    </Container>
  );
};

export default WeatherDetail;

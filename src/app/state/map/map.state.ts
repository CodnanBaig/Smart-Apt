import { Geocode } from "src/app/models/geocode.model";

export interface MapState {
    geocode: Geocode[]
}

export const initialState: MapState = {
    "geocode": [
        {
            "Longitude": "-97.42201",
            "Latitude": "32.700878",
            "Percision": "ROOFTOP",
            "IsValid": true
        },
        {
            "Longitude": "-97.419173",
                "Latitude": "32.674341",
                "Percision": "ROOFTOP",
                "IsValid": true
        },
        {
            "Longitude": "-97.420898",
            "Latitude": "32.695078",
            "Percision": "GEOMETRIC_CENTER",
            "IsValid": true
        },
        {
            "Longitude": "-97.383017",
            "Latitude": "32.712804",
            "Percision": "ROOFTOP",
            "IsValid": true
        },
        {
            "Longitude": "-97.430361",
            "Latitude": "32.705048",
            "Percision": "GEOMETRIC_CENTER",
            "IsValid": true
        },
        {
            "Longitude": "-97.387957",
            "Latitude": "32.721068",
            "Percision": "ROOFTOP",
            "IsValid": true
        },
        {
            "Longitude": "-97.39105",
            "Latitude": "32.725568",
            "Percision": "ROOFTOP",
            "IsValid": true
        },
        {
            "Longitude": "-97.4148",
            "Latitude": "32.6954",
            "Percision": "GEOMETRIC_CENTER",
            "IsValid": true
        },
        {
            "Longitude": "-97.359472",
            "Latitude": "32.747698",
            "Percision": "RANGE_INTERPOLATED",
            "IsValid": true
        },
        {
            "Longitude": "-97.423602",
            "Latitude": "32.69913",
            "Percision": "GEOMETRIC_CENTER",
            "IsValid": true
        },
        {
            "Longitude": "-97.42563",
            "Latitude": "32.700414",
            "Percision": "GEOMETRIC_CENTER",
            "IsValid": true
        },
        {
            "Longitude": "-97.410761",
            "Latitude": "32.673911",
            "Percision": "GEOMETRIC_CENTER",
            "IsValid": true
        },
        {
            "Longitude": "-97.415196",
            "Latitude": "32.726082",
            "Percision": "ROOFTOP",
            "IsValid": true
        },
        {
            "Longitude": "-97.349082",
            "Latitude": "32.715501",
            "Percision": "ROOFTOP",
            "IsValid": true
        },
        {
            "Longitude": "-97.360138",
            "Latitude": "32.697651",
            "Percision": "ROOFTOP",
            "IsValid": true
        },
        {
            "Longitude": "-97.408734",
            "Latitude": "32.674031",
            "Percision": "GEOMETRIC_CENTER",
            "IsValid": true
        },
        {
            "Longitude": "-97.420898",
            "Latitude": "32.69929",
            "Percision": "GEOMETRIC_CENTER",
            "IsValid": true
        }
    ]
}
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


const Register = () => {
  return (
    <div>
      <form>
        <Autocomplete
          getOptionLabel={(option) => `${option.title} (${option.year})`}
          id="movie-customized-option-demo"
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} label="Choose a movie" variant="standard" />
          )}
        />
      </form>
    </div>
  );
};

export default Register;

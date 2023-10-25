import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export function MUISelect({ categories, selectCategory, selectedCategory }) {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCategory}
                    onChange={selectCategory}
                >
                    {categories.map(c => <MenuItem key={c.category} name="category" value={c.category}>{c.category}</MenuItem>)}

                </Select>
            </FormControl>
        </Box>
    );
}
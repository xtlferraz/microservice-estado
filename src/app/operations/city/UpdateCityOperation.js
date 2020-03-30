module.exports = ({ cityService }) => ({

    execute: (city) => {
             return cityService.update(city);
    
    }
});
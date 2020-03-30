module.exports = ({ stateService }) => ({

    execute: (state) => {
        return stateService.update(state);
    }
});
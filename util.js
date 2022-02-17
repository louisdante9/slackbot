exports.filterKeys = (payload, state) => {
    const keys = Object.keys(state.values)
    let option;
    if (payload.type === 'block_actions') {
         option = state.values[keys]['static_select-action'].selected_option.text.text
    } else {
        // const keys = Object.keys(state.values)
         option = state.values[keys]['multi_static_select-action'].selected_options.map((a)=> a.text.text).join(', ')
    }
    return option
}
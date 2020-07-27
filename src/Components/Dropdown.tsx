import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React, { useContext } from 'react'
import { AppActionType, AppContext } from '../App/AppReducer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
)

export const Dropdown = (props: any) => {
  const { userElements, itemElements } = props
  console.log(userElements)
  const { state, dispatch } = useContext(AppContext)
  const classes = useStyles()
  const [age, setAge] = React.useState<string | number>('')
  const [open, setOpen] = React.useState(false)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number)
    if (userElements) {
      dispatch({
        userID: event.target.value as string,
        type: AppActionType.SET_USER_ID
      })
    } else {
      dispatch({
        itemID: event.target.value as string,
        type: AppActionType.SET_ITEM_ID
      })
    }

  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <Button className={ classes.button } onClick={ handleOpen }>
        {userElements ? 'Select one user ID' : 'Select one item ID'}
      </Button>
      <FormControl className={ classes.formControl }>
        <InputLabel id='demo-controlled-open-select-label'>{userElements ? 'User ID' : 'Item ID'}</InputLabel>
        <Select
          labelId='demo-controlled-open-select-label'
          id='demo-controlled-open-select'
          open={ open }
          onClose={ handleClose }
          onOpen={ handleOpen }
          value={ age }
          onChange={ handleChange }
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>

          {
            userElements && userElements.map((x: string, i: number) => <MenuItem key={ `${x}-${i}`} value={ x }>{ x }</MenuItem>)
          }
          { itemElements && itemElements.map((x: string, i: number) => <MenuItem key={ `${x}-${i}` } value={ x }>{ x }</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}

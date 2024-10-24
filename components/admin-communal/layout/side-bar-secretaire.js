"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import Link from 'next/link';
const SiderBarSecretaire=()=>{
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    window.location.href = '/authentification'; 
};
    return(
        <>
<Sidebar className=''>
  <Menu>
   
  <MenuItem   className='hover:text-black'
            icon={<FontAwesomeIcon icon={faHome} className='text-black hover:text-black' />} // Utilisez l'icône ici
            component={<Link href="/secretaire" />}
        >
      Home 
      </MenuItem>
    <SubMenu label="Enregistrer" icon={<FontAwesomeIcon icon={faPlus} />}>
      <MenuItem  component={<Link href="/secretaire/enregistre-enfant"/>}> Naissance </MenuItem>
      <MenuItem component={<Link href="/secretaire/enregistre-etat-civil"/>}> Mariage </MenuItem>
    </SubMenu>
    
   
      <MenuItem icon={<FontAwesomeIcon icon={faFile} />} component={<Link href="/secretaire/notifications"/>}  > Notifications </MenuItem>
 
    <SubMenu label="Liste d'enregistrement" icon={<FontAwesomeIcon icon={faList} />}>
      <MenuItem component={<Link href="/secretaire/liste-enfants"/>}> Naissance </MenuItem>
      <MenuItem component={<Link href="/secretaire/liste-etatcivil"/>}>Mariage </MenuItem>
    </SubMenu>
    <MenuItem icon={<FontAwesomeIcon icon={faRightFromBracket} />} onClick={handleLogout}> Se Deconnecter </MenuItem>
  </Menu>
</Sidebar>
</>
    )
}

export default SiderBarSecretaire
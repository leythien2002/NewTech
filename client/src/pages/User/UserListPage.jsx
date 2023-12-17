import React from 'react'
import DataTable from '../../components/Table/TableComponent';
import ContentLayout from '../../layouts/ContentLayout';

const UserList = () => {
  return (
    <ContentLayout 
    pageName={'User'}
     isShowButton={true} 
     navigateTo={'/user/create'} 
     content={<DataTable />}/>
  )
}

export default UserList
import { Table } from "flowbite-react";
import { BiEdit } from "react-icons/bi";

const ManageEmployee = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Employee name</Table.HeadCell>
          <Table.HeadCell>Designation</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Compansation</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Md Pervej Hossain
            </Table.Cell>
            <Table.Cell>Full Stack Web Developer</Table.Cell>
            <Table.Cell>mdpervejhossain0@gmail.com</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <BiEdit size={25} />
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Jhon Doe
            </Table.Cell>
            <Table.Cell>Board Of Member</Table.Cell>
            <Table.Cell>jhon@gmail.com</Table.Cell>
            <Table.Cell>$5999</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <BiEdit size={25} />
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Jerin Khan
            </Table.Cell>
            <Table.Cell>Graphic Designer</Table.Cell>
            <Table.Cell>jerin#gmail.com</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <BiEdit size={25} />
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageEmployee;

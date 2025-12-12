const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

exports.restartAzureVm = async (subscriptionId, resourceGroupName, vmName) => {
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  try {
    await client.virtualMachines.beginRestart(resourceGroupName, vmName);
    console.log(`VM '${vmName}' restarted successfully.`);
  } catch (e) {
    console.error(`Error restarting VM: ${e.message}`);
  }

};

exports.startVM = async (subscriptionId, resourceGroupName, vmName) => {
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  try {
    await client.virtualMachines.beginStart(resourceGroupName, vmName);
    console.log(`VM '${vmName}' started successfully.`);
  } catch (e) {
    console.error(`Error starting VM: ${e.message}`);
  }

};

exports.stopVM = async (subscriptionId, resourceGroupName, vmName) => {
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  try {
    await client.virtualMachines.beginPowerOff(resourceGroupName, vmName);
    console.log(`VM '${vmName}' stopped successfully.`);
  } catch (e) {
    console.error(`Error stopping VM: ${e.message}`);
  }

};



// const { ComputeManagementClient } = require("@azure/arm-compute");
// const { DefaultAzureCredential } = require("@azure/identity");
// require("dotenv").config(); // To load environment variables

// /**
//  * Remotely restarts an Azure Virtual Machine.
//  * * @param {string} subscriptionId The ID of your Azure subscription.
//  * @param {string} resourceGroupName The name of the resource group the VM is in.
//  * @param {string} vmName The name of the Virtual Machine to restart.
//  */
// async function restartAzureVm(subscriptionId, resourceGroupName, vmName) {
//     // 1. Authenticate using DefaultAzureCredential
//     // This credential automatically looks for credentials in the environment
//     // (e.g., environment variables, Azure CLI, Managed Identity).
//     const credential = new DefaultAzureCredential();

//     // 2. Create the ComputeManagementClient
//     const client = new ComputeManagementClient(credential, subscriptionId);

//     console.log(`Attempting to restart VM: ${vmName} in resource group: ${resourceGroupName}...`);

//     try {
//         // 3. Start the restart operation
//         // beginRestart returns a polls, as the restart operation is long-running.
//         const restartOperation = await client.virtualMachines.beginRestart(
//             resourceGroupName,
//             vmName
//         );

//         // 4. Wait for the operation to complete
//         console.log("Restart operation initiated. Waiting for completion...");
//         await restartOperation.pollUntilDone();

//         console.log(`VM ${vmName} restarted successfully.`);
        
//     } catch (error) {
//         console.error(`Failed to restart VM ${vmName}.`);
//         console.error("Error details:", error.message);
//     }
// }

// // --- Example Usage ---
// // Ensure you set these values (e.g., in a .env file or directly).
// const SUBSCRIPTION_ID = process.env.AZURE_SUBSCRIPTION_ID || "YOUR_SUBSCRIPTION_ID";
// const RESOURCE_GROUP_NAME = process.env.AZURE_RESOURCE_GROUP || "YOUR_RESOURCE_GROUP_NAME";
// const VM_NAME = process.env.AZURE_VM_NAME || "YOUR_VM_NAME";

// if (SUBSCRIPTION_ID === "YOUR_SUBSCRIPTION_ID") {
//     console.error("Please update the AZURE_SUBSCRIPTION_ID, AZURE_RESOURCE_GROUP, and AZURE_VM_NAME variables.");
// } else {
//     restartAzureVm(SUBSCRIPTION_ID, RESOURCE_GROUP_NAME, VM_NAME);
// }
